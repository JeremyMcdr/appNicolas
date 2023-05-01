import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-verification-porte',
  templateUrl: './verification-porte.component.html',
  styleUrls: ['./verification-porte.component.css']
})
export class VerificationPorteComponent implements OnInit {
  @ViewChildren('content') content!: QueryList<ElementRef>;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      structure: ['', Validators.required],
      organe: ['', Validators.required],
      tablier: ['', Validators.required],
      mecanisme: ['', Validators.required],
      dispoArretMaintien: ['', Validators.required],
      dispoSecu: ['', Validators.required],
      manoeuvre: ['', Validators.required],
      signalisation: ['', Validators.required],
      equipementElect: ['', Validators.required],
    });
  }
  data: string | undefined;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = params['data'];
    });
  }

  onSubmit() {
    const formulaire = this.form.value;
    this.form.reset();
    this.generatePdf(formulaire).then(r => 'Réussite');
  }

  async generatePdf(formulaire: any) {
    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Exemple : Ajouter le texte "Structure" suivi de la valeur du champ "structure" du formulaire.
    pdf.setFontSize(14);
    pdf.text('Structure: ' + formulaire.structure, 50, 50);

    // ...
    // Ajoutez d'autres éléments de texte ou des images en utilisant les données du formulaire.
    // ...

    let currentPage = 0;
    const marginTop = 50;
    const scale = 2;

    for (const section of this.content.toArray()) {
      const element = section.nativeElement;

      const canvas = await html2canvas(element, {
        scale: 1,
      });

      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
      const scaledWidth = pdfWidth * scale;
      const scaledHeight = imgHeight * scale;

      if (currentPage !== 0) {
        pdf.addPage();
      }

      pdf.addImage(imgData, 'PNG', 10, marginTop, scaledWidth, scaledHeight);

      currentPage++;
    }
    pdf.save('document.pdf');
  }
}

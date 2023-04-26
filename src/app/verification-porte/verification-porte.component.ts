import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";



@Component({
  selector: 'app-verification-porte',
  templateUrl: './verification-porte.component.html',
  styleUrls: ['./verification-porte.component.css']
})
export class VerificationPorteComponent implements OnInit{
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


  public structure: any
  public organe: any
  public tablier: any
  public mecanisme: any
  public dispositifArret: any
  public dispositifSecurite: any
  public manoeuvreDepanage: any
  public signalisation: any
  public equipement: any
  onSubmit() {
    this.structure = this.form.value.structure
    this.organe = this.form.value.organe
    this.tablier = this.form.value.tablier
    this.mecanisme = this.form.value.mecanisme
    this.dispositifArret = this.form.value.dispoArretMaintien
    this.dispositifSecurite = this.form.value.dispoSecu
    this.manoeuvreDepanage = this.form.value.manoeuvre
    this.signalisation = this.form.value.signalisation
    this.equipement = this.form.value.equipementElect
    this.form.reset();

    this.generatePdf().then(r => 'Réussite')
  }


  /*Génération du PDF*/
  /*
  generatePDF() {
    const doc = new jsPDF();
    function addFramedTitle(doc: jsPDF, title: string, y: number, width: number, height: number) {
      // Configurer la police et la taille du titre
      doc.setFont('helvetica');
      doc.setFontSize(18);

      // Calculer la largeur de la page
      const pageWidth = doc.internal.pageSize.getWidth();

      // Calculer la position x pour centrer le cadre horizontalement sur la page
      const x = (pageWidth - width) / 2;

      // Calculer la largeur du titre et sa position x pour le centrer dans le cadre
      const fontSize = doc.getFontSize();
      const titleWidth = doc.getStringUnitWidth(title) * fontSize / doc.internal.scaleFactor;
      const titleX = x + (width - titleWidth) / 2;

      // Ajouter le titre centré dans le cadre
      doc.text(title, titleX, y + height / 2 + fontSize / 3); // Ajuster l'espacement vertical selon vos préférences

      // Dessiner le cadre
      doc.setLineWidth(1);
      doc.rect(x, y, width, height);
    }
    function addText(doc: jsPDF, text: string, x: number, y: number, index: number, isTitle: boolean = false) {
      // Configurer la police et la taille en fonction de si c'est un titre ou non
      doc.setFont('helvetica');
      doc.setFontSize(isTitle ? 18 : 12);

      // Si c'est un titre, centrer horizontalement
      if (isTitle) {
        const pageWidth = doc.internal.pageSize.getWidth();
        const fontSize = doc.getFontSize();
        const textWidth = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
        x = (pageWidth - textWidth) / 2;
      }

      // Ajuster la position y en fonction de l'index
      y += index * 20; // Vous pouvez ajuster '20' pour modifier l'espacement entre les lignes

      // Ajouter le texte à la position spécifiée
      doc.text(text, x, y);
    }


    function addCenteredText(doc: jsPDF, text: string, y: number) {
      const pageWidth = doc.internal.pageSize.getWidth();
      const fontSize = doc.getFontSize();
      const textWidth = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
      const x = (pageWidth - textWidth) / 2;
      doc.text(text, x, y);
    }

    //Titre
    addText(doc, 'Structure', 0, 30, 0, true); // x=0, y=30, index=0, isTitle=true
    //Sous-texte
    addText(doc, 'Texte normal 1', 20, 30, 1); // x=20, y=30, index=1, isTitle=false (par défaut)
    //Titre
    addText(doc, 'Organes de liaisons', 0, 30, 2, true); // x=0, y=30, index=2, isTitle=true
    // Sous-text
    addText(doc, 'Texte normal 2', 20, 30, 3); // x=20, y=30, index=3, isTitle=false (par défaut)

    //Titre
    addText(doc, 'Tablier', 0, 30, 4, true); // x=0, y=30, index=0, isTitle=true
    //Sous-texte
    addText(doc, 'Texte normal 1', 20, 30, 5); // x=20, y=30, index=1, isTitle=false (par défaut)


    //Titre
    addText(doc, 'Dispositif d\'arrêt et de maintien à l\'arrêt', 0, 30, 6, true); // x=0, y=30, index=0, isTitle=true
    //Sous-texte
    addText(doc, 'Texte normal 1', 20, 30, 7); // x=20, y=30, index=1, isTitle=false (par défaut)

    //Titre
    addText(doc, 'Dispositif de sécurité', 0, 30, 8, true); // x=0, y=30, index=0, isTitle=true
    //Sous-texte
    addText(doc, 'Texte normal 1', 20, 30, 9); // x=20, y=30, index=1, isTitle=false (par défaut)

    //Titre
    addText(doc, 'Manoeuvre de secours', 0, 30, 10, true); // x=0, y=30, index=0, isTitle=true
    //Sous-texte
    addText(doc, 'Texte normal 1', 20, 30, 11); // x=20, y=30, index=1, isTitle=false (par défaut)

    //Titre
    addText(doc, 'Manoeuvre de dépannage', 0, 30, 12, true); // x=0, y=30, index=0, isTitle=true
    //Sous-texte
    addText(doc, 'Texte normal 1', 20, 30, 13); // x=20, y=30, index=1, isTitle=false (par défaut)
    //Titre
    addText(doc, 'Signalisation / Eclairage', 0, 30, 14, true); // x=0, y=30, index=0, isTitle=true
    //Sous-texte
    addText(doc, 'Texte normal 1', 20, 30, 15); // x=20, y=30, index=1, isTitle=false (par défaut)

    //Titre
    addText(doc, 'Equipemebts électriques', 0, 30, 16, true); // x=0, y=30, index=0, isTitle=true
    //Sous-texte
    addText(doc, 'Texte normal 1', 20, 30, 17); // x=20, y=30, index=1, isTitle=false (par défaut)

    //Titre
    addText(doc, 'Equipemebts électriques', 0, 30, 16, true); // x=0, y=30, index=0, isTitle=true
    //Sous-texte
    addText(doc, 'Texte normal 1', 20, 30, 18); // x=20, y=30, index=1, isTitle=false (par défaut)


    // Enregistrer le PDF généré
    doc.save('example.pdf');
  }*/

  async generatePdf() {
    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    let currentPage = 0;
    const marginTop = 50; // Remplacez 50 par la marge souhaitée en points
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

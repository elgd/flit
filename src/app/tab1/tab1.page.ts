import { Component  } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
})



export class Tab1Page {
  
  raw1 : number = 0;
  raw2 : number = 0;
  raw3 : number = 0;
  raw4 : number = 0;
  raw5 : number = 0;
  raw6 : number = 0;
  raw7 : number = 0;
  fwb : number = 0;
  aftb : number = 0;
  momentraw1 : number;
  momentraw2 : number; 
  momentraw3 : number;
  momentraw4 : number;
  momentraw5 : number;
  momentraw6 : number;
  momentraw7 : number;
  momentfwb : number;
  momentaftb : number;
  totalPayloadWeight : number =0 ;
  totalPayloadMoment : number =0 ;
  crewWeight: number = 170;
  crewMoment: number = this.crewWeight * 0.103;
  domWeight: number = 4435;
  domMoment: number = 11470;
  zfmWeight: number = +this.domWeight + +this.totalPayloadWeight;
  zfmMoment: number = +this.domMoment + +this.totalPayloadMoment;
  rampMassFmWeight: number =0;
  rampMassFmMoment: number = this.rampMassFmWeight * 3.134 ;
  rampMassFtWeight: number =0;
  rampMassFtMoment: number = this.rampMassFtWeight * 2.674  ;
  rampMassWeight: number = +this.rampMassFmWeight + +this.rampMassFtWeight + +this.zfmWeight;
  rampMassMoment: number = +this.rampMassFmMoment + +this.rampMassFtMoment + +this.zfmMoment;
  taxiFuelWeight: number = 20;
  taxiFuelMoment: number = this.taxiFuelWeight*3.134;
  takeOffMassWeight : number = this.rampMassWeight - +this.taxiFuelWeight;
  takeOffMassMoment : number = this.rampMassMoment - +this.taxiFuelMoment;
  tfTipsWeight: number = 0;
  tfMainsWeight: number = 0;
  tfTipsMoment: number = this.tfTipsWeight*2.674;
  tfMainsMoment: number = this.tfMainsWeight*3.134;
  landingMassWeight: number = +this.takeOffMassWeight - +this.tfMainsWeight - +this.tfTipsWeight;
  landingMassMoment: number = +this.takeOffMassMoment - +this.tfMainsMoment - +this.tfTipsMoment;
  Mac: number = (((+this.takeOffMassMoment / +this.takeOffMassWeight) - 2.19055)/1.9178)*100 ;
  flightNumber: string;

  

  constructor(private nativeStorage: NativeStorage) {
    this.refreshMoment();
  }
 
  public onChange(event){
    switch (event.target.id)
    {
        case "raw1":
          this.raw1 = event.target.value;
          this.refreshMoment();
          break;
        case "raw2":
          this.raw2 = event.target.value;
          this.refreshMoment();
          break;
        case "raw3":
          this.raw3 = event.target.value;
          this.refreshMoment();
          break;
        case "raw4":
          this.raw4 = event.target.value;
          this.refreshMoment();
          break;
        case "raw5":
          this.raw5 = event.target.value;
          this.refreshMoment();
          break;
        case "raw6":
          this.raw6 = event.target.value;
          this.refreshMoment();
          break;
        case "raw7":
          this.raw7 = event.target.value;
          this.refreshMoment();
          break;
        case "fwb":
          this.fwb = event.target.value;
          this.refreshMoment();
          break;
        case "aftb":
          this.aftb = event.target.value;
          this.refreshMoment();
          break;
        case "rampMassFmWeight":
          this.rampMassFmWeight = event.target.value;
          this.refreshMoment();
          break;
        case "rampMassFtWeight":
          this.rampMassFtWeight = event.target.value;
          this.refreshMoment();
          break;
        case "tfTipsWeight":
          this.tfTipsWeight = event.target.value;
          this.refreshMoment();
          break;
        case "tfMainsWeight":
          this.tfMainsWeight = event.target.value;
          this.refreshMoment();
          break;
        case "flightNumber":
          this.flightNumber = event.target.value;
          this.refreshMoment();
          break;

        default: 
          alert('champs non valide');
          break;
    }
  }

  public refreshMoment(){
    this.momentraw1 = 1.235*this.raw1;
    this.momentraw2 = 1.995*this.raw2;
    this.momentraw3 = 2.755*this.raw3;
    this.momentraw4 = 3.515*this.raw4;
    this.momentraw5 = 4.275*this.raw5;
    this.momentraw6 = 5.035*this.raw6;
    this.momentraw7 = 5.785*this.raw7;
    this.momentfwb  = -1.333*this.fwb;
    this.momentaftb = 6.65*this.aftb;
    this.totalPayloadWeight= +this.raw1 + +this.raw2 + +this.raw3 + +this.raw4 + +this.raw5 + +this.raw6 + +this.raw7 + +this.fwb + +this.aftb;
    this.totalPayloadMoment= +this.momentraw1 + +this.momentraw2 + +this.momentraw3 + +this.momentraw4 + +this.momentraw5 + +this.momentraw6 + +this.momentraw7 + +this.momentfwb + +this.momentaftb;
    this.zfmWeight = +this.domWeight + +this.totalPayloadWeight;
    this.zfmMoment = +this.domMoment + +this.totalPayloadMoment;
    this.rampMassFmMoment = this.rampMassFmWeight * 3.134 ;
    this.rampMassFtMoment = this.rampMassFtWeight * 2.674  ;
    this.rampMassWeight = +this.rampMassFmWeight + +this.rampMassFtWeight + +this.zfmWeight;
    this.rampMassMoment = +this.rampMassFmMoment + +this.rampMassFtMoment + +this.zfmMoment;
    this.takeOffMassWeight = this.rampMassWeight - +this.taxiFuelWeight;
    this.takeOffMassMoment = this.rampMassMoment - +this.taxiFuelMoment;
    this.tfTipsMoment = this.tfTipsWeight*2.674;
    this.tfMainsMoment = this.tfMainsWeight*3.134;
    this.landingMassWeight = +this.takeOffMassWeight - +this.tfMainsWeight -+this.tfTipsWeight;
    this.landingMassMoment = +this.takeOffMassMoment - +this.tfMainsMoment -+this.tfTipsMoment;
    this.Mac = (((+this.takeOffMassMoment / +this.takeOffMassWeight) - 2.19055)/1.9178)*100 ;
  }

  public saveWM(event){
    console.log('lancement saveWM')
    var id : number = Date.now().valueOf();

    var temp : any 
    temp = {
      id: id,
      date: id/100,
      raw1 : this.raw1,
      raw2 : this.raw2,
      raw3 : this.raw3,
      raw4 : this.raw4,
      raw5 : this.raw5,
      raw6 : this.raw6,
      raw7 : this.raw7,
      fwb : this.fwb,
      aftb :  this.aftb,
      momentraw1 : this.momentraw1,
      momentraw2 : this.momentraw2, 
      momentraw3 : this.momentraw3,
      momentraw4 : this.momentraw4,
      momentraw5 : this.momentraw5,
      momentraw6 : this.momentraw6,
      momentraw7 : this.momentraw7,
      momentfwb : this.momentfwb,
      momentaftb : this.momentaftb,
      totalPayloadWeight : this.totalPayloadWeight,
      totalPayloadMoment : this.totalPayloadMoment,
      crewWeight: this.crewWeight,
      crewMoment: this.crewMoment,
      domWeight: this.domWeight,
      domMoment: this.domMoment,
      zfmWeight: this.zfmWeight,
      zfmMoment: this.zfmMoment,
      rampMassFmWeight: this.rampMassFmMoment,
      rampMassFmMoment: this.rampMassFmWeight,
      rampMassFtWeight: this.rampMassFtWeight,
      rampMassFtMoment: this.rampMassFtMoment,
      rampMassWeight: this.rampMassWeight,
      rampMassMoment: this.rampMassMoment,
      taxiFuelWeight: this.taxiFuelWeight,
      taxiFuelMoment: this.rampMassMoment,
      takeOffMassWeight : this.takeOffMassWeight,
      takeOffMassMoment : this.takeOffMassMoment,
      tfTipsWeight: this.tfTipsWeight,
      tfMainsWeight: this.tfMainsWeight,
      tfTipsMoment:this.tfTipsMoment,
      tfMainsMoment: this.tfMainsMoment,
      landingMassWeight: this.landingMassWeight,
      landingMassMoment: this.landingMassMoment,
      mac: this.Mac
    }

    this.nativeStorage.setItem('flight:'+id, temp)
    .then(
      () => console.log('Stored item!' + temp),
      error => console.error('Error storing item', error)
    );
  
    }

}



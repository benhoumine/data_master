import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { exempleGenerationData } from './exempleGenerationData.service';

@Component({
  selector: 'app-grid-data',
  providers: [exempleGenerationData],
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.css']
})
export class GridDataComponent implements OnInit {


  private _user_ = '';
  source: LocalDataSource;

  constructor(protected service: exempleGenerationData ) {
      this.source = new LocalDataSource();
      this.service.myData().then((data) => {
        this.source.load(data);
      });
  }

  ngOnInit() {
  }

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      nom: {
        title: 'nom'
      },
      email: {
        title: 'Email'
      }
    }
  };


}

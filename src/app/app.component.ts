import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ASTWithSource } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gamesleaderapp';
  items: any = [];
  searchitems: any = [];
  ranknew: any;
  pageOfItems: Array<any> = [];
  collection: any = [];
  searchcollection: any = [];

  p: any;
  searchTerm: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('http://localhost:3000/games').subscribe(
      (data) => {
        this.items = data;
        this.items.forEach((ele: any) => {
          let Obj = {
            'rank': `${ele.Rank}`,
            'Platform': `${ele.Platform}`, 'Year': ` ${ele.Year}`,
            'Genre': ` ${ele.Platform}`, 'Publisher': ` ${ele.Year}`,
            'Global_Sales': ` ${ele.Year}`
          }
          this.collection.push(Obj);

        });
      }
    );
    //this.items =this.items.map(( i:any) => ({ id: (i + 1), name: `Item ${i + 1}`}));


  }
  search(filte: any) {

    this.items = this.items
    if (filte != '') {
      this.searchitems = this.items.filter(
        (val: any) => val.Rank == filte
          || val.Platform.toString().toLowerCase().includes(filte)
          || val.Year.toString().toLowerCase().includes(filte)
          || val.Publisher.toString().toLowerCase().includes(filte)
          || val.Genre.toString().toLowerCase().includes(filte)
          || val.Global_Sales.toString().toLowerCase().includes(filte)


      )
      if (this.searchitems.length > 3) {
        this.searchcollection = []

        this.searchitems.forEach((ele: any) => {
          let Obj = {
            'rank': ` ${ele.Rank}`,
            'Platform': `${ele.Platform}`, 'Year': `${ele.Year}`,
            'Genre': ` ${ele.Platform}`, 'Publisher': ` ${ele.Year}`,
            'Global_Sales': ` ${ele.Year}`
          }

          this.searchcollection.push(Obj);

        });
      }
    }
    else {
      this.searchcollection = []
      this.collection = this.collection
    }
  }
  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  callFunction(item: any) {

    this.collection.sort((a: any, b: any) => a.Rank === b.Rank ? -1 : 0);

  }

  edit(a: any, b: any) {
    console.log(a)
    if (b == 'rank') {
      this.searchcollection = []

      this.searchitems.forEach((ele: any) => {
        let Obj = {
          'rank': ` ${a}`,
          'Platform': `${ele.Platform}`, 'Year': `${ele.Year}`,
          'Genre': ` ${ele.Platform}`, 'Publisher': ` ${ele.Year}`,
          'Global_Sales': ` ${ele.Year}`
        }

        this.searchcollection.push(Obj);
      });
    }
  }

}

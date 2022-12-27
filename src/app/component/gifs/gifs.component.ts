import { Component, Input, OnInit } from '@angular/core';
import { GifInterface } from 'src/app/interface/gif-interface';
import { GifCrudService } from 'src/app/services/gif-crud.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
})
export class GifsComponent implements OnInit {
  ngOnInit(): void {
    this.getGif();
  }
  constructor(private gifCrudService: GifCrudService) {}
  gifList: GifInterface[] = [];
  newGif: GifInterface = {
    id: 0,
    url: '',
    author_id: 2007,
  };
  id: string = '';
  noExisteGif: boolean = false;
  @Input() gif!: GifInterface;

  getGif() {
    this.gifCrudService.getGigs().subscribe((resp) => {
      if (resp.length > 0) {
        this.gifList = resp;
        console.log(this.gifList);
      } else {
        this.noExisteGif = true;
      }
    });
  }
  saveGif() {
    if(this.newGif.url.trim().length!=0){
      this.gifCrudService.saveGif(this.newGif).subscribe((resp) => {
        this.getGif();
      });
      alert('Gif Guardado correctamente');
    }else{
      alert('Error al guardar')
    }
    
    
  }

  deleteGif(gifs: GifInterface) {
    this.gifCrudService.deleteGif(gifs).subscribe((resp) => {
      this.getGif();
      console.log(resp);
    });
    alert('Gif ELIMINADO correctamente');
  }
}

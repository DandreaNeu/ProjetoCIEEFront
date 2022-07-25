import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Filme } from '../../models/Filme';
import { FilmeService } from '../../services/filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  modalRef?: BsModalRef;
  public filmes: Filme[] = [];
  public filmesFiltrados: Filme[] = [];

  private _filtroLista: string = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }
  public set filtroLista(value: string){
    this._filtroLista = value;
    this.filmesFiltrados = this.filtroLista ? this.filtrarFilmes(this.filtroLista): this.filmes;
  }

  public filtrarFilmes(filtrarPor: string): Filme[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.filmes.filter(
      (filme: { titulo: string; generoFilme: string; }) => filme.titulo.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      filme.generoFilme.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );

  }

  constructor(
    private filmeService : FilmeService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) { }

  public ngOnInit(): void {
    this.getFilmes();
    this.spinner.show();

    setTimeout(() => {
       this.spinner.hide();
    }, 3000);
  }

  public getFilmes(): void{
    this.filmeService.getFilmes().subscribe(
      (_filmes: Filme[]) => {
        this.filmes = _filmes;
        this.filmesFiltrados = this.filmes

      },
      error  => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar.', 'Erro!');

      }
    );
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('Filme excluído com sucesso.', 'Excluído!');
  }

  decline(): void {
    this.modalRef?.hide();
  }



}



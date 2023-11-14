import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../services/data.services';
import { AddModelData } from 'src/app/models/add-model-data';
import { AddModalComponent } from 'src/app/components/add-modal/add-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Field {
  key: string;
  label: string;
  type: "text" | "number";
  value?: any;
}

interface Hotel {
  id: number;
  cnpj: string;
  nome: string;
  endereco: string;
  contato: string;
  mediaEstrelas: number;
}

@Component({
  selector: 'app-hoteis',
  templateUrl: './hoteis.component.html',
  styleUrls: ['./hoteis.component.css'],
})
export class HoteisComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'cnpj', 'nome', 'endereco', 'contato', 'mediaEstrelas', 'editar', 'excluir'];
  dataSource = new MatTableDataSource<any>();
  termoPesquisa: string = '';
  constructor(private dialog: MatDialog, private dataService: DataService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getHoteis().subscribe((data) => {
      if (this.termoPesquisa) {
        this.dataSource.data = data.filter((hotel) => {
          return hotel.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase());
        });
      } else {
        this.dataSource.data = data;
      }
    });
  }
  editarHotel(hotel: any) {
    this.openEditHotelDialog(hotel);
  }


  excluirHotel(hotel: any) {
    const snackBarRef = this.snackBar.open(`Deseja realmente excluir o hotel ${hotel.nome}?`, 'Sim', {
      duration: 5000,
      panelClass: 'snack-bar-confirm',
    });
  
    snackBarRef.onAction().subscribe(() => {
      this.dataService.excluirHotel(hotel.id)
        .subscribe(
          (response) => {
            this.snackBar.open('Hotel excluído com sucesso', 'Fechar', {
              duration: 3000,
            });
            this.loadData();
          },
          (error) => {
            this.snackBar.open('Erro ao excluir hotel', 'Fechar', {
              duration: 3000,
              panelClass: ['error-snackbar'],
            });
            console.error('Erro ao excluir hotel:', error);
          }
        );
    });
  }


  openNewHotelDialog() {
    const modalData: AddModelData = {
      title: 'Adicionar Novo Hotel',
      fields: [
        { key: 'nome', label: 'Nome do Hotel', type: 'text' },
        { key: 'cnpj', label: 'Cnpj', type: 'number' },
        { key: 'endereco', label: 'Endereço do Hotel', type: 'text' },
        { key: 'mediaEstrelas', label: 'Média de Estrelas', type: 'text' },
        { key: 'contato', label: 'Contato:', type: 'text' },
      ],
    };
  
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '500px',
      data: modalData,
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.criarHotel(result)
          .subscribe(
            (response) => {
              this.snackBar.open('Novo hotel adicionado com sucesso', 'Fechar', {
                duration: 3000,
              });
              this.loadData();
            },
            (error) => {
              this.snackBar.open('Erro ao adicionar hotel', 'Fechar', {
                duration: 3000, 
                panelClass: ['error-snackbar'], 
              });
              console.error('Erro ao adicionar hotel:', error);
            }
          );
      }
    });
  }


  realizarPesquisa() {
    this.dataService.getHoteis().subscribe((data: Hotel[]) => {
      if (this.termoPesquisa) {
        this.dataSource.data = data.filter((hotel) => {
          return hotel.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase());
        });
      } else {
        this.dataSource.data = data;
      }
    });
  }


  limparPesquisa() {
    this.termoPesquisa = '';
  }

  openEditHotelDialog(hotel: any) {
    const modalData: AddModelData = {
      title: 'Editar Hotel',
      fields: [
        { key: 'nome', label: 'Nome do Hotel', type: 'text', value: hotel.nome } as Field,
        { key: 'cnpj', label: 'Cnpj', type: 'number', value: hotel.cnpj } as Field,
        { key: 'endereco', label: 'Endereço do Hotel', type: 'text', value: hotel.endereco } as Field,
        { key: 'mediaEstrelas', label: 'Média de Estrelas', type: 'text', value: hotel.mediaEstrelas } as Field,
        { key: 'contato', label: 'Contato:', type: 'text', value: hotel.contato } as Field,
      ],
    };
  
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '500px',
      data: modalData,
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
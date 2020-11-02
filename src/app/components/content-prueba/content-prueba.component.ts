import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare var $: any;
// import { isBs3 } from 'ngx-bootstrap/utils';
@Component({
  selector: 'app-content-prueba',
  templateUrl: './content-prueba.component.html',
  styleUrls: ['./content-prueba.component.css']
})
export class ContentPruebaComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  // tslint:disable-next-line: typedef
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    // tslint:disable-next-line: typedef
    $(document).ready(() => {
      const modalContent: any = $('.modal-content');
      modalContent.draggable({
        handle: '.modal-header',
        revert: true,
        revertDuration: 300
      });
    });
  }
}



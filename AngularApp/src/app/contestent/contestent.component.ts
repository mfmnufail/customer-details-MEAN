import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContestentService } from '../shared/contestent.service';
import { Contestent } from '../shared/contestent.model';

declare var M: any;

@Component({
  selector: 'app-contestent',
  templateUrl: './contestent.component.html',
  styleUrls: ['./contestent.component.css'],
  providers: [ContestentService]
})
export class ContestentComponent implements OnInit {

  constructor(public contestentService: ContestentService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshContestentList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.contestentService.selectedContestent = {
      _id: "",
      name: "",
      address: "",
      phone: "",
      nic: "",

    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.contestentService.postContestent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContestentList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.contestentService.putContestent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContestentList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshContestentList() {
    this.contestentService.getContestentList().subscribe((res) => {
      this.contestentService.contestents = res as Contestent[];
    });
  }

  onEdit(contes: Contestent) {
    this.contestentService.selectedContestent = contes;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.contestentService.deleteContestent(_id).subscribe((res) => {
        this.refreshContestentList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}

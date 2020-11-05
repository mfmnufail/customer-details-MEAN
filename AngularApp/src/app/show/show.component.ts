import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contestent } from '../shared/contestent.model';
import { ContestentService } from '../shared/contestent.service';

declare var M: any;

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [ContestentService]
})
export class ShowComponent implements OnInit {

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

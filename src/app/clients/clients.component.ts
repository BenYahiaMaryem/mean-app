import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import {ClientsService} from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent  {

clients :any=[];

client = {
    _id: 0,
    name : 'client name',
    password: '' ,
    email : 'm@gmail.com',
    tel: 0 ,
    isDeleted : 0

}
constructor(private clientsService: ClientsService) {  
     this.clientsService.getAllClients().subscribe(clients => {
            this.clients = clients;})
    }
 addClient(){
        var client = this.client;
        this.clientsService.addClient(client)
            .subscribe(data => {
                console.log('Success' + data)
                this.clients.push(client);
            })
    }



    removeClient(_id){
        var bookG=this.clientsService.getClientById(_id)
    .subscribe(data => {
                this.client=data;
                this.client.isDeleted=1;
                this.clientsService.removeClient(this.client).subscribe (data => {
                console.log('Success deleting ' + data);
                
            })
            })
         
         
        
     }
 updateClient(){
     var client = this.client;
      this.clientsService.updateClient(client)
      .subscribe(data => {
                console.log('Success updating' + data)
                this.clients.push(client);
            })
            
 }
 
}


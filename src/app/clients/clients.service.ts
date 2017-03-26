import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ClientsService {

  
 constructor(private http: Http) { }

getAllClients(){
  return this.http.get('/api/clients')
            .map(res => res.json());

}


getClientById(_id){

return this.http.get('/api/clients/'+_id)
            .map(res => res.json());

}

addClient(client){
var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/clients", JSON.stringify(client), { headers: headers }) .map(response => response.json());
}

removeClient(client){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
return this.http.put("/api/clients/"+ client._id+"/delete", JSON.stringify(client), { headers: headers }) .map(response => response.json());

}

        


updateClient(client){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
        return this.http.put("/api/client/"+client._id+"/update", JSON.stringify(client), { headers: headers }) .map(response => response.json());

}
}



import { AuthHelper } from "../helper/auth";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class ApiClient {
    static request(method: HttpMethod, endpoint: string, body?: any){
        const apiUrl = Cypress.env('API_URL');
        const token = AuthHelper.getToken();

        const headers: any = {
            'Content-Type': 'application/json',
        };
        if(token){
            headers['Authorization'] = `Bearer ${token}`;
        }

        return cy.request({
            method: method,
            url: `${apiUrl}${endpoint}`,
            body: body,
            headers: headers,
            failOnStatusCode: false
        });
    }

    static get(endpoint: string){ return this.request('GET', endpoint);}
    static post(endpoint: string, body: any){ return this.request('POST', endpoint, body);}
    static put(endpoint: string, body: any){ return this.request('PUT', endpoint, body);}
    static delete(endpoint: string){ return this.request('DELETE', endpoint);}
}
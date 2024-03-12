
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ActionResponse } from '../../models/ActionResponse';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root',
})
export class HttpService {
    apiAddress: string = environment.apiUrl;
    //  identityAddress: string = environment.identityUrl + '';
    constructor(
        private httpClient: HttpClient,
    ) { }

    get(url: string): Promise<any> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient.get<Promise<any>>(fullUrl).toPromise();
    }

    post(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;

        const token = localStorage.getItem('accessToken') ?? null;


        if (token) {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });

            return this.httpClient.post(fullUrl, body, { headers }).pipe(
                map((response: any) => {
                    return response;
                })
            );
        } else {
            return this.httpClient
                .post<Promise<any>>(fullUrl, body);
        }
    }
    run<T>(url: string, body: any, options?: object): Observable<ActionResponse<T>> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient.post<ActionResponse<T>>(fullUrl, body, options);

    }
    delete(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: body
        };
        return this.httpClient.delete<Promise<any>>(fullUrl, options);
    }

    put(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient
            .put<Promise<any>>(fullUrl, body);

    }


    signUp(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient
            .post<Promise<any>>(fullUrl, body);

    }

    signIn(url: string, domain: string): Observable<any> {
        const body = new HttpParams()
            .set('grant_type', 'delegation')
            // .set('username', model.userName)
            // .set('password', model.password)
            .set("domain", domain)
            .set('client_id', 'onlinereservation')
            // .set('scope', model.scope)
            .set('client_secret', 'secret');

        const fullUrl: string = this.apiAddress + url;

        return this.httpClient.post<any>(fullUrl,
            body.toString(),
            { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') });



    }
    useRefreshToken(url: string, refreshToken: string): Observable<any> {
        const body = new HttpParams()
            .set('grant_type', 'refresh_token')
            .set('client_id', 'adminclient')
            .set('client_secret', 'secret')
            .set('refresh_token', refreshToken);

        const fullUrl: string = this.apiAddress + url;

        return this.httpClient.post<any>(fullUrl, body.toString(), {
            headers: new HttpHeaders().set(
                'Content-Type',
                'application/x-www-form-urlencoded'
            ),
        });
    }
    getRequest(url: string): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient
            .get(fullUrl);
    }

    signInWithPropId(url: string, domain: string, propertyId: string): Observable<any> {

        const body = new HttpParams()
            .set('grant_type', 'delegation')
            // .set('username', model.userName)
            // .set('password', model.password)
            .set("domain", domain)
            .set("property_id", propertyId)
            .set('client_id', 'onlinereservation')
            // .set('scope', model.scope)
            .set('client_secret', 'secret');

        const fullUrl: string = this.apiAddress + url;

        return this.httpClient.post<any>(fullUrl,
            body.toString(),
            { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') });



    }



}

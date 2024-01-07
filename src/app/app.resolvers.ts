import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';
import { GlobalService } from './core/services/global/global.service';
import { StorageDto } from './core/models/localStorage/storageDto';
@Injectable({
    providedIn: 'root'
})
export class InitialDataResolver implements Resolve<any>
{
    subDomain: string;
    constructor(private _authService: AuthService,
        private router: Router,
    ) {
        this.subDomain = window.location.origin.toLowerCase();
    }
    /**
    * Use this resolver to resolve initial mock-api for the application
    *
    * @param route
    * @param state
    */
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        await this.signIn(this.subDomain);
        await this.getHotelDef();
        // return forkJoin([
        //     this.signIn(this.subDomain),
        //     this.getHotelDef()
        // ])
    }

    async signIn(domain: string): Promise<any> {
        const model = {
            domain: domain
        }
        return this._authService.signIn(model).toPromise();
    }

    async getHotelDef(): Promise<any> {

        const tokenInfo: StorageDto = GlobalService.tokenInfo() as StorageDto;
        const model = {
            CompanyId: tokenInfo.PropertyId,
            TenantId: tokenInfo.TenantId,
            DomainType: Number(tokenInfo.DomainType)
        }

        return 
        // this._companyService.getHotelDefinition(model).toPromise().then((res) => {


        //     if (res.isSuccessful && localStorage.getItem("companyFactSheetDef")) {
        //         localStorage.removeItem("companyFactSheetDef");
        //     }
        //     localStorage.setItem("companyFactSheetDef", JSON.stringify(res.data));
 
        // });
    }

}
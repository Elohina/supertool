import { Injectable } from '@angular/core';

@Injectable()
export class Habitant {
    private _habitants: any[];

    get habitants(): any {
        return this._habitants;
    }

    set habitants(data: any) {
        this._habitants = data;
    }

    public getCountries() {
        return Object.keys(this._habitants);
    }
}

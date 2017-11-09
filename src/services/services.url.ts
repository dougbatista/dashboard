import { Injectable } from '@angular/core';

@Injectable()
export class URLServices {

    public URL_DEV: string = 'http://ec2-34-198-55-211.compute-1.amazonaws.com/api';
    public URL_LOCAL: string = 'http://localhost:8080/api';

    url_dev() {
      return this.URL_DEV;
    }
    url_local() {
      return this.URL_LOCAL;
    }
}
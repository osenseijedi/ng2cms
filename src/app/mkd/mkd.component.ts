import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-mkd',
    templateUrl: './mkd.component.html',
    styleUrls: ['./mkd.component.css']
})
export class MkdComponent implements OnInit {
    pathToMkd: String;

    constructor(private route: ActivatedRoute,
                private http: HttpClient) {
    }

    ngOnInit(): void {
        this.pathToMkd = `/assets/markdown/` + this.route.snapshot.paramMap.get('pathToMkd');
    }
}

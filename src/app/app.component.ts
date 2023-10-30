import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BehaviorSubject } from 'rxjs';

interface Country {
	id?: number;
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		name: 'France',
		flag: 'c/c3/Flag_of_France.svg',
		area: 640679,
		population: 64979548,
	},
	{
		name: 'Germany',
		flag: 'b/ba/Flag_of_Germany.svg',
		area: 357114,
		population: 82114224,
	},
	{
		name: 'Portugal',
		flag: '5/5c/Flag_of_Portugal.svg',
		area: 92090,
		population: 10329506,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		name: 'Vietnam',
		flag: '2/21/Flag_of_Vietnam.svg',
		area: 331212,
		population: 95540800,
	},
	{
		name: 'Brazil',
		flag: '0/05/Flag_of_Brazil.svg',
		area: 8515767,
		population: 209288278,
	},
	{
		name: 'Mexico',
		flag: 'f/fc/Flag_of_Mexico.svg',
		area: 1964375,
		population: 129163276,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		name: 'India',
		flag: '4/41/Flag_of_India.svg',
		area: 3287263,
		population: 1324171354,
	},
	{
		name: 'Indonesia',
		flag: '9/9f/Flag_of_Indonesia.svg',
		area: 1910931,
		population: 263991379,
	},
	{
		name: 'Tuvalu',
		flag: '3/38/Flag_of_Tuvalu.svg',
		area: 26,
		population: 11097,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

@Component({
  standalone: true,
	imports: [
		NgbNavModule, CommonModule, FormsModule, NgbTypeaheadModule, NgbPaginationModule, NgSelectModule, HttpClientModule
	],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  active = 1;
  page = 1;
	pageSize = 4;
	collectionSize = COUNTRIES.length;
	countries!: Country[];
	data = [];
	_ftFrequencyValue$ = new BehaviorSubject<string>('Y');
	ftFrequencyValue$ = this._ftFrequencyValue$.asObservable();

  constructor(private http:HttpClient) {
		this.refreshCountries();
	}
	trade=[
		{
			id:"I",
			name:"Imports"
		},
		{
			id:"E",
			name:"Exports"
		},
		{
			id:"R",
			name:"Re-Export"
		},
		{
			id:"T",
			name:"Total Exports"
		}
	];

	years = [
		{
			value:"2023"
		},
		{
			value:"2022"
		}
		,{
			value:"2021"
		},{
			value:"2020"
		},{
			value:"2019"
		},{
			value:"2018"
		},{
			value:"2017"
		},{
			value:"2016"
		},{
			value:"2015"
		},{
			value:"2014"
		},{
			value:"2013"
		},{
			value:"2012"
		}
	];
	months = [
		{
			value: "1",
			name: "January"
		},
		{
			value: "2",
			name: "February"
		},
		{
			value: "3",
			name: "March"
		},
		{
			value: "4",
			name: "April"
		},
		{
			value: "5",
			name: "May"
		},
		{
			value: "6",
			name: "June"
		},
		{
			value: "7",
			name: "July"
		},
		{
			value: "8",
			name: "August"
		},
		{
			value: "9",
			name: "September"
		},
		{
			value: "10",
			name: "October"
		},
		{
			value: "11",
			name: "November"
		},
		{
			value: "12",
			name: "December"
		}
	];
	cntry=[
		{"name": "Albania", "code": "AL"},
		{"name": "Åland Islands", "code": "AX"},
		{"name": "Algeria", "code": "DZ"},
		{"name": "American Samoa", "code": "AS"},
		{"name": "Andorra", "code": "AD"},
		{"name": "Angola", "code": "AO"},
		{"name": "Anguilla", "code": "AI"},
		{"name": "Antarctica", "code": "AQ"},
		{"name": "Antigua and Barbuda", "code": "AG"},
		{"name": "Argentina", "code": "AR"},
		{"name": "Armenia", "code": "AM"},
		{"name": "Aruba", "code": "AW"},
		{"name": "Australia", "code": "AU"},
		{"name": "Austria", "code": "AT"},
		{"name": "Azerbaijan", "code": "AZ"},
		{"name": "Bahamas (the)", "code": "BS"},
		{"name": "Bahrain", "code": "BH"},
		{"name": "Bangladesh", "code": "BD"},
		{"name": "Barbados", "code": "BB"},
		{"name": "Belarus", "code": "BY"},
		{"name": "Belgium", "code": "BE"},
		{"name": "Belize", "code": "BZ"},
		{"name": "Benin", "code": "BJ"},
		{"name": "Bermuda", "code": "BM"},
		{"name": "Bhutan", "code": "BT"},
		{"name": "Bolivia (Plurinational State of)", "code": "BO"},
		{"name": "Bonaire, Sint Eustatius and Saba", "code": "BQ"},
		{"name": "Bosnia and Herzegovina", "code": "BA"},
		{"name": "Botswana", "code": "BW"},
		{"name": "Bouvet Island", "code": "BV"},
		{"name": "Brazil", "code": "BR"},
		{"name": "British Indian Ocean Territory (the)", "code": "IO"},
		{"name": "Brunei Darussalam", "code": "BN"},
		{"name": "Bulgaria", "code": "BG"},
		{"name": "Burkina Faso", "code": "BF"},
		{"name": "Burundi", "code": "BI"},
		{"name": "Cabo Verde", "code": "CV"},
		{"name": "Cambodia", "code": "KH"},
		{"name": "Cameroon", "code": "CM"},
		{"name": "Canada", "code": "CA"},
		{"name": "Cayman Islands (the)", "code": "KY"},
		{"name": "Central African Republic (the)", "code": "CF"},
		{"name": "Chad", "code": "TD"},
		{"name": "Chile", "code": "CL"},
		{"name": "China", "code": "CN"},
		{"name": "Christmas Island", "code": "CX"},
		{"name": "Cocos (Keeling) Islands (the)", "code": "CC"},
		{"name": "Colombia", "code": "CO"},
		{"name": "Comoros (the)", "code": "KM"},
		{"name": "Congo (the Democratic Republic of the)", "code": "CD"},
		{"name": "Congo (the)", "code": "CG"},
		{"name": "Cook Islands (the)", "code": "CK"},
		{"name": "Costa Rica", "code": "CR"},
		{"name": "Croatia", "code": "HR"},
		{"name": "Cuba", "code": "CU"},
		{"name": "Curaçao", "code": "CW"},
		{"name": "Cyprus", "code": "CY"},
		{"name": "Czechia", "code": "CZ"},
		{"name": "Côte d'Ivoire", "code": "CI"},
		{"name": "Denmark", "code": "DK"},
		{"name": "Djibouti", "code": "DJ"},
		{"name": "Dominica", "code": "DM"},
		{"name": "Dominican Republic (the)", "code": "DO"},
		{"name": "Ecuador", "code": "EC"},
		{"name": "Egypt", "code": "EG"},
		{"name": "El Salvador", "code": "SV"},
		{"name": "Equatorial Guinea", "code": "GQ"},
		{"name": "Eritrea", "code": "ER"},
		{"name": "Estonia", "code": "EE"},
		{"name": "Eswatini", "code": "SZ"},
		{"name": "Ethiopia", "code": "ET"},
		{"name": "Falkland Islands (the) [Malvinas]", "code": "FK"},
		{"name": "Faroe Islands (the)", "code": "FO"},
		{"name": "Fiji", "code": "FJ"},
		{"name": "Finland", "code": "FI"},
		{"name": "France", "code": "FR"},
		{"name": "French Guiana", "code": "GF"},
		{"name": "French Polynesia", "code": "PF"},
		{"name": "French Southern Territories (the)", "code": "TF"},
		{"name": "Gabon", "code": "GA"},
		{"name": "Gambia (the)", "code": "GM"},
		{"name": "Georgia", "code": "GE"},
		{"name": "Germany", "code": "DE"},
		{"name": "Ghana", "code": "GH"},
		{"name": "Gibraltar", "code": "GI"},
		{"name": "Greece", "code": "GR"},
		{"name": "Greenland", "code": "GL"},
		{"name": "Grenada", "code": "GD"},
		{"name": "Guadeloupe", "code": "GP"},
		{"name": "Guam", "code": "GU"},
		{"name": "Guatemala", "code": "GT"},
		{"name": "Guernsey", "code": "GG"},
		{"name": "Guinea", "code": "GN"},
		{"name": "Guinea-Bissau", "code": "GW"},
		{"name": "Guyana", "code": "GY"},
		{"name": "Haiti", "code": "HT"},
		{"name": "Heard Island and McDonald Islands", "code": "HM"},
		{"name": "Holy See (the)", "code": "VA"},
		{"name": "Honduras", "code": "HN"},
		{"name": "Hong Kong", "code": "HK"},
		{"name": "Hungary", "code": "HU"},
		{"name": "Iceland", "code": "IS"},
		{"name": "India", "code": "IN"},
		{"name": "Indonesia", "code": "ID"},
		{"name": "Iran (Islamic Republic of)", "code": "IR"},
		{"name": "Iraq", "code": "IQ"},
		{"name": "Ireland", "code": "IE"},
		{"name": "Isle of Man", "code": "IM"},
		{"name": "Israel", "code": "IL"},
		{"name": "Italy", "code": "IT"},
		{"name": "Jamaica", "code": "JM"},
		{"name": "Japan", "code": "JP"},
		{"name": "Jersey", "code": "JE"},
		{"name": "Jordan", "code": "JO"},
		{"name": "Kazakhstan", "code": "KZ"},
		{"name": "Kenya", "code": "KE"},
		{"name": "Kiribati", "code": "KI"},
		{"name": "Korea (the Democratic People's Republic of)", "code": "KP"},
		{"name": "Korea (the Republic of)", "code": "KR"},
		{"name": "Kuwait", "code": "KW"},
		{"name": "Kyrgyzstan", "code": "KG"},
		{"name": "Lao People's Democratic Republic (the)", "code": "LA"},
		{"name": "Latvia", "code": "LV"},
		{"name": "Lebanon", "code": "LB"},
		{"name": "Lesotho", "code": "LS"},
		{"name": "Liberia", "code": "LR"},
		{"name": "Libya", "code": "LY"},
		{"name": "Liechtenstein", "code": "LI"},
		{"name": "Lithuania", "code": "LT"},
		{"name": "Luxembourg", "code": "LU"},
		{"name": "Macao", "code": "MO"},
		{"name": "Madagascar", "code": "MG"},
		{"name": "Malawi", "code": "MW"},
		{"name": "Malaysia", "code": "MY"},
		{"name": "Maldives", "code": "MV"},
		{"name": "Mali", "code": "ML"},
		{"name": "Malta", "code": "MT"},
		{"name": "Marshall Islands (the)", "code": "MH"},
		{"name": "Martinique", "code": "MQ"},
		{"name": "Mauritania", "code": "MR"},
		{"name": "Mauritius", "code": "MU"},
		{"name": "Mayotte", "code": "YT"},
		{"name": "Mexico", "code": "MX"},
		{"name": "Micronesia (Federated States of)", "code": "FM"},
		{"name": "Moldova (the Republic of)", "code": "MD"},
		{"name": "Monaco", "code": "MC"},
		{"name": "Mongolia", "code": "MN"},
		{"name": "Montenegro", "code": "ME"},
		{"name": "Montserrat", "code": "MS"},
		{"name": "Morocco", "code": "MA"},
		{"name": "Mozambique", "code": "MZ"},
		{"name": "Myanmar", "code": "MM"},
		{"name": "Namibia", "code": "NA"},
		{"name": "Nauru", "code": "NR"},
		{"name": "Nepal", "code": "NP"},
		{"name": "Netherlands (the)", "code": "NL"},
		{"name": "New Caledonia", "code": "NC"},
		{"name": "New Zealand", "code": "NZ"},
		{"name": "Nicaragua", "code": "NI"},
		{"name": "Niger (the)", "code": "NE"},
		{"name": "Nigeria", "code": "NG"},
		{"name": "Niue", "code": "NU"},
		{"name": "Norfolk Island", "code": "NF"},
		{"name": "Northern Mariana Islands (the)", "code": "MP"},
		{"name": "Norway", "code": "NO"},
		{"name": "Oman", "code": "OM"},
		{"name": "Pakistan", "code": "PK"},
		{"name": "Palau", "code": "PW"},
		{"name": "Palestine, State of", "code": "PS"},
		{"name": "Panama", "code": "PA"},
		{"name": "Papua New Guinea", "code": "PG"},
		{"name": "Paraguay", "code": "PY"},
		{"name": "Peru", "code": "PE"},
		{"name": "Philippines (the)", "code": "PH"},
		{"name": "Pitcairn", "code": "PN"},
		{"name": "Poland", "code": "PL"},
		{"name": "Portugal", "code": "PT"},
		{"name": "Puerto Rico", "code": "PR"},
		{"name": "Qatar", "code": "QA"},
		{"name": "Republic of North Macedonia", "code": "MK"},
		{"name": "Romania", "code": "RO"},
		{"name": "Russian Federation (the)", "code": "RU"},
		{"name": "Rwanda", "code": "RW"},
		{"name": "Réunion", "code": "RE"},
		{"name": "Saint Barthélemy", "code": "BL"},
		{"name": "Saint Helena, Ascension and Tristan da Cunha", "code": "SH"},
		{"name": "Saint Kitts and Nevis", "code": "KN"},
		{"name": "Saint Lucia", "code": "LC"},
		{"name": "Saint Martin (French part)", "code": "MF"},
		{"name": "Saint Pierre and Miquelon", "code": "PM"},
		{"name": "Saint Vincent and the Grenadines", "code": "VC"},
		{"name": "Samoa", "code": "WS"},
		{"name": "San Marino", "code": "SM"},
		{"name": "Sao Tome and Principe", "code": "ST"},
		{"name": "Saudi Arabia", "code": "SA"},
		{"name": "Senegal", "code": "SN"},
		{"name": "Serbia", "code": "RS"},
		{"name": "Seychelles", "code": "SC"},
		{"name": "Sierra Leone", "code": "SL"},
		{"name": "Singapore", "code": "SG"},
		{"name": "Sint Maarten (Dutch part)", "code": "SX"},
		{"name": "Slovakia", "code": "SK"},
		{"name": "Slovenia", "code": "SI"},
		{"name": "Solomon Islands", "code": "SB"},
		{"name": "Somalia", "code": "SO"},
		{"name": "South Africa", "code": "ZA"},
		{"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
		{"name": "South Sudan", "code": "SS"},
		{"name": "Spain", "code": "ES"},
		{"name": "Sri Lanka", "code": "LK"},
		{"name": "Sudan (the)", "code": "SD"},
		{"name": "Suriname", "code": "SR"},
		{"name": "Svalbard and Jan Mayen", "code": "SJ"},
		{"name": "Sweden", "code": "SE"},
		{"name": "Switzerland", "code": "CH"},
		{"name": "Syrian Arab Republic", "code": "SY"},
		{"name": "Taiwan (Province of China)", "code": "TW"},
		{"name": "Tajikistan", "code": "TJ"},
		{"name": "Tanzania, United Republic of", "code": "TZ"},
		{"name": "Thailand", "code": "TH"},
		{"name": "Timor-Leste", "code": "TL"},
		{"name": "Togo", "code": "TG"},
		{"name": "Tokelau", "code": "TK"},
		{"name": "Tonga", "code": "TO"},
		{"name": "Trinidad and Tobago", "code": "TT"},
		{"name": "Tunisia", "code": "TN"},
		{"name": "Turkey", "code": "TR"},
		{"name": "Turkmenistan", "code": "TM"},
		{"name": "Turks and Caicos Islands (the)", "code": "TC"},
		{"name": "Tuvalu", "code": "TV"},
		{"name": "Uganda", "code": "UG"},
		{"name": "Ukraine", "code": "UA"},
		{"name": "United Arab Emirates (the)", "code": "AE"},
		{"name": "United Kingdom of Great Britain and Northern Ireland (the)", "code": "GB"},
		{"name": "United States Minor Outlying Islands (the)", "code": "UM"},
		{"name": "United States of America (the)", "code": "US"},
		{"name": "Uruguay", "code": "UY"},
		{"name": "Uzbekistan", "code": "UZ"},
		{"name": "Vanuatu", "code": "VU"},
		{"name": "Venezuela (Bolivarian Republic of)", "code": "VE"},
		{"name": "Viet Nam", "code": "VN"},
		{"name": "Virgin Islands (British)", "code": "VG"},
		{"name": "Virgin Islands (U.S.)", "code": "VI"},
		{"name": "Wallis and Futuna", "code": "WF"},
		{"name": "Western Sahara", "code": "EH"},
		{"name": "Yemen", "code": "YE"},
		{"name": "Zambia", "code": "ZM"},
		{"name": "Zimbabwe", "code": "ZW"}
	  ];
	filter={
		tradetype:[],
		year:[],
		month: [],
		pageno:1,
		pagesize:20,
		count :0,
		country:[],
	}

	refreshCountries() {
		this.search();
	}

	onChangeFrequency(frequency) {
		this._ftFrequencyValue$.next(frequency);
	}

	search(){
		const payload = {
			tradetype : "'" + this.filter.tradetype.join("','") + "'",
			year : this.filter.year.join(",") ,
			country :  "'" + this.filter.country.join("','") + "'",

			pageno:this.filter.pageno,
			pagesize:this.filter.pagesize
		}
		this.http.post('https://demo-api.fit-infotech.com/api/History/getSearchData',payload).subscribe(x=>{
			if(x['status'])
			{
				this.data = x['data'];
				this.filter.count = x['count'];
			}
			else{
				this.data =[];
				this.filter.count = 0
			}
		})
	}
	export(){
		const payload = {
			tradetype : "'" + this.filter.tradetype.join("','") + "'",
			pageno:this.filter.pageno,
			pagesize:this.filter.pagesize,
			year : this.filter.year.join(",") ,
			country :  "'" + this.filter.country.join("','") + "'",


		}

		this.http.post('https://demo-api.fit-infotech.com/api/History/exportFile',payload,{ responseType: 'blob' as 'blob' }).subscribe(x=>
			{
				let filetype = {};

				  filetype ={ type: 'text/csv' };

				  const file = new Blob([x], filetype)
				  const fileURL = URL.createObjectURL(file);
				  const a         = document.createElement('a');
				  a.href        = fileURL;
				  a.target      = '_blank';
				  a.download    =  "ExportData";
				  document.body.appendChild(a);
				  a.click();
			  })

	}
}

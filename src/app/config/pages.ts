import { ConfigModel } from '../core/interfaces/config';

export class PagesConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			'/': {
				page: {
					title: 'Reports',
					desc: 'Latest updates and statistic charts'
				}
			},
			header: {
				actions: {
					page: { title: 'Actions', desc: 'actions example page' }
				}
			},
			404: {
				page: { title: '404 Not Found', desc: '', subheader: false }
			}
		};
	}
}

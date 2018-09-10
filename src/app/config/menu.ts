// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items: [
				]
			},
			aside: {
				self: {},

				items: [
					{
						title: 'Reports',
						root: true,
						icon: 'flaticon-add',
						bullet: 'dot',
						submenu: [
								{
									title: 'Unit List',
									desc: 'Unit List',
									page: '/UnitList',
								},
								{
									title: 'Proximity Detection Summary',
									desc: 'Proximity Detection Summary Report',
									page: '/',
								},
								// {
								// 	title: 'Proximity Detection Detailed',
								// 	desc: 'Proximity Detection Detailed Report',
								// 	page: '/ProximityDetectionDetailed',
								// }
							
						]
					}

					
				]
			}
		};
	}
}

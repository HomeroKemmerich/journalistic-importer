import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS } from './constants/settings';
import { AppController } from './controllers/ImportController';
import { JournalisticExport } from './models/JournalisticExportModel';
import { JournalisticImporterSettings } from './models/JournalisticImporterSettings';

export default class JournalisticImporter extends Plugin {
	settings: JournalisticImporterSettings;
	controller: AppController;

	async onload() {
		await this.loadSettings();

		this.controller = new AppController(
			this.app,
			new JournalisticExport()
		);

		// Left ribbon icon
		const ribbonIconEl = this.addRibbonIcon('import', 'Import journalistic data', (evt: MouseEvent) => {
			this.controller.start();
		});

	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}


import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { DEFAULT_SETTINGS } from './constants/settings';
import { ImportController } from './controllers/ImportController';
import JournalisticImporterSettings from './models/JournalisticImporterSettings';
import { ImportView } from './views/ImportView';


export default class JournalisticImporter extends Plugin {
	settings: JournalisticImporterSettings;
	controller: ImportController;

	async onload() {
		await this.loadSettings();

		this.controller = new ImportController(this.app);

		// Left ribbon icon
		const ribbonIconEl = this.addRibbonIcon('import', 'Journalistic Importer', (evt: MouseEvent) => {
			this.controller.openModal();
		});

		this.addCommand({
			id: 'start-importer-modal',
			name: 'start importer',
			callback: () => {
				this.controller.openModal()
			}
		});

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
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


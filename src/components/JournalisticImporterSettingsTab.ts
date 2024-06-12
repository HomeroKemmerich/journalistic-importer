import { App, PluginSettingTab } from "obsidian";
import JournalisticImporter from "src/main";

export class JournalisticImporterSettingsTab extends PluginSettingTab {
	plugin: JournalisticImporter

	constructor(app: App, plugin: JournalisticImporter){
		super(app, plugin);
		this.plugin = plugin
	}

	display() {
			
	}
}

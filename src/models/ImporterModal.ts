import { App, Modal } from "obsidian";

export class ImporterModal extends Modal{
	constructor(app: App){
		super(app)
	}

	onOpen(): void {
		const {contentEl} = this;
		contentEl.setText('Journalistic importer');

		const importerForm = contentEl.createEl('form',{cls:'row'});

		const textColumn = importerForm.createEl('label', {cls: 'column', text: 'Select the json file to be imported'})
		const inputColumn = importerForm.createEl('input', {type: 'file', cls: 'column'})
	}

	onClose(): void {
		const {contentEl} = this;
		contentEl.empty();
	}
}

import { App, Modal } from "obsidian";

export class ImporterModal extends Modal{
	constructor(app: App){
		super(app)
	}

	onOpen(): void {
		const {contentEl} = this;
		contentEl.setText('Journalistic importer');

		const rowDiv = contentEl.createDiv({cls: 'row'});

		const textColumn = rowDiv.createDiv({cls: 'column'})
		const inputColumn = rowDiv.createDiv({cls: 'column'})

		const importText = textColumn.createEl('p', {text: 'Select the JSON file to be imported'})
		const fileInput = inputColumn.createEl('input', {type: 'file'})
	}

	onClose(): void {
		const {contentEl} = this;
		contentEl.empty();
	}
}

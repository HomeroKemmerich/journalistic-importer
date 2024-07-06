import { App, Modal, Notice } from "obsidian";

export class ImporterModal extends Modal{
	constructor(app: App){
		super(app)
	}

	onOpen(): void {
		const {contentEl} = this;
		contentEl.setText('Journalistic importer');

		const importForm = contentEl.createEl('form', {cls: 'import-form'});

		const inputRow = importForm.createDiv({cls: 'row'})

		const importLabel = inputRow.createEl('label', {cls: 'column', text: 'Select the json file to be imported'})
		const importInput = inputRow.createEl('input', {type: 'file', cls: 'column'})

		const actionRow = importForm.createDiv({cls: 'form-actions'})
		
		const cancelButton = actionRow.createEl('button', {text: 'Cancel', cls: 'cta-button'});
		const importButton = actionRow.createEl('button', {text: 'Import', cls: 'cta-button'});
		importButton.onClickEvent(() => {
			// this.onClose();
			new Notice("Works");
		})
	}

	onClose(): void {
		const {contentEl} = this;
		contentEl.empty();
	}
}

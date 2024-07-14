import { App, Modal, Notice } from "obsidian";

export class ImporterModal extends Modal{
	constructor(app: App){
		super(app)
	}

	onOpen(): void {
		const {contentEl} = this;

		let files;

		contentEl.setText('Journalistic importer');

		const importForm = contentEl.createEl('form', {cls: 'import-form'});

		const inputRow = importForm.createDiv({cls: 'row'})

		const importLabel = inputRow.createEl('label', {cls: 'column', text: 'Select the json file to be imported'})

		const importInput = inputRow.createEl('input', {type: 'file', cls: 'column'})
		importInput.addEventListener('change',async (event: Event) => {
			const target = event.target as HTMLInputElement;
			const files = target.files;

			
		});

		const actionRow = importForm.createDiv({cls: 'form-actions'})
		
		const cancelButton = actionRow.createEl('button', {text: 'Cancel', cls: 'cta-button'});
		const importButton = actionRow.createEl('button', {text: 'Import', cls: 'cta-button'});

		cancelButton.onClickEvent(() => {
			this.close();
		});
		
	}

	onClose(): void {
		const {contentEl} = this;
		contentEl.empty();
	}

	onError(description: string): void {
		new Notice(description);
		this.onOpen();
	}
}

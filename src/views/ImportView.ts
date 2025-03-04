import { App, Modal, Notice } from "obsidian";
import { AppController } from "src/controllers/ImportController";
import { FileListOrNull } from "src/types/Types";

export class ImportView extends Modal {

	private importForm: HTMLFormElement;
	private inputRow: HTMLDivElement;
	private importLabel: HTMLLabelElement;
	private importInput: HTMLInputElement;
	private actionRow: HTMLDivElement;
	private cancelButton: HTMLButtonElement;
	private importButton: HTMLButtonElement;

	
	constructor(app: App, private controller: AppController) {
		super(app)

		this.contentEl.setText('Journalistic importer');
		
		this.importForm 	= this.contentEl.createEl('form', { cls: 'import-form' });
		this.inputRow 		= this.importForm.createDiv({ cls: 'row' })
		this.importLabel 	= this.inputRow.createEl('label', { cls: 'column', text: 'Select the json file to be imported' })
		this.importInput 	= this.inputRow.createEl('input', { type: 'file', cls: 'column' })
		this.actionRow 		= this.importForm.createDiv({ cls: 'form-actions' })
		this.cancelButton 	= this.actionRow.createEl('button', { text: 'Cancel', cls: 'cta-button' });
		this.importButton 	= this.actionRow.createEl('button', { text: 'Import', cls: 'cta-button' });
		
		this.importInput.addEventListener('change', this.setFiles);

		this.importButton.onClickEvent(() => this.close)
		
		this.cancelButton.onClickEvent(() => this.close);
	}
	
	onOpen(): void {
	}
	
	onClose(): void {
		this.contentEl.empty();
	}
	
	onError(description: string): void {
		new Notice(description);
		this.onOpen();
	}
	
	public notice(content: any) {
		return new Notice(String(content));
	}
	
	public setFiles(e: Event): void {
		const target = e.target as HTMLInputElement;
		const files = target.files;
		this.controller.setFiles(files)
	}
}

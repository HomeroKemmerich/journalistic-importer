import { App, Modal, Notice } from "obsidian";
import { AppController } from "src/controllers/ImportController";

export class ImportView extends Modal {

	private importForm: HTMLFormElement;
	private inputRow: HTMLDivElement;
	private importLabel: HTMLLabelElement;
	private importInput: HTMLInputElement;
	private actionRow: HTMLDivElement;
	private cancelButton: HTMLButtonElement;
	private importButton: HTMLButtonElement;

	private journalisticFile: File;

	
	constructor(
		app: App, 
		private onFileImport: () => void,
		private onImportClicked: () => void
	) {
		super(app)

		this.contentEl.setText('Journalistic importer');
		
		this.importForm 	= this.contentEl.createEl('form', { cls: 'import-form' });
		this.inputRow 		= this.importForm.createDiv({ cls: 'row' })
		this.importLabel 	= this.inputRow.createEl('label', { cls: 'column', text: 'Select the JSON file to be imported' })
		this.importInput 	= this.inputRow.createEl('input', { type: 'file', cls: 'column' })
		this.actionRow 		= this.importForm.createDiv({ cls: 'form-actions' })
		this.cancelButton 	= this.actionRow.createEl('button', { text: 'Cancel', cls: 'cta-button' });
		this.importButton 	= this.actionRow.createEl('button', { text: 'Import', cls: 'cta-button' });
				
		this.cancelButton.onClickEvent(() => this.close);
		this.importButton.onClickEvent(() => {
			this.onImportClicked();
			this.close();
		});
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
	
	public async listenForFileInput(){
		this.importInput.addEventListener('change', async (e: Event) => {
			const target = e.target as HTMLInputElement;
			const files = target.files;
			
			if(!files){
				throw new Error('No file selected');
			}
			
			this.journalisticFile = files[0];
			this.onFileImport();
		});
	}

	public getJournalisticFile(): File {
		return this.journalisticFile;
	}

}

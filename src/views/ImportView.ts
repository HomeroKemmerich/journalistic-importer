import { App, Modal, Notice } from "obsidian";
import { AppController } from "src/controllers/ImportController";
import { FileListOrNull } from "src/types/Types";

export class ImportView extends Modal {
	constructor(app: App, private controller: AppController) {
		super(app)
	}

	onOpen(): void {
		const { contentEl } = this;

		let files: FileListOrNull;

		contentEl.setText('Journalistic importer');

		//#region components
		const importForm = contentEl.createEl('form', { cls: 'import-form' });

		const inputRow = importForm.createDiv({ cls: 'row' })
		const importLabel = inputRow.createEl('label', { cls: 'column', text: 'Select the json file to be imported' })
		const importInput = inputRow.createEl('input', { type: 'file', cls: 'column' })

		const actionRow = importForm.createDiv({ cls: 'form-actions' })
		const cancelButton = actionRow.createEl('button', { text: 'Cancel', cls: 'cta-button' });
		const importButton = actionRow.createEl('button', { text: 'Import', cls: 'cta-button' });
		//#endregion

		//#region event listeners
		importInput.addEventListener('change', async (event: Event) => {
			const target = event.target as HTMLInputElement;
			files = target.files;
		});


		importButton.onClickEvent(async () => {
			await this.controller.importFiles(files)
			this.close();
		})

		cancelButton.onClickEvent(() => {
			this.close();
		});

	}

	onClose(): void {
		const { contentEl } = this;
		contentEl.empty();
	}

	onError(description: string): void {
		new Notice(description);
		this.onOpen();
	}
}

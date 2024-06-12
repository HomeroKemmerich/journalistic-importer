import { App, Modal } from "obsidian";

export class ImporterModal extends Modal{
	constructor(app: App){
		super(app)
	}

	onOpen(): void {
		const {contentEl} = this;
		contentEl.setText('Journalistic importer');
	}

	onClose(): void {
		const {contentEl} = this;
		contentEl.empty();
	}
}

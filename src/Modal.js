'use strict';

import Component from 'metal-component';
import JSX from 'metal-jsx';

class Modal extends Component  {
	render() {
		var buttons = this.footerButtons.map((button) => {
			return <button type="button" class="btn btn-primary">{button.label}</button>
		});

		return <div class="modal">
			<div class="modal-dialog">
				<div class="modal-content">
					<header class="modal-header">
						<h4 class="modal-title">{this.header}</h4>
					</header>
					<section class="modal-body">{this.body}</section>
					<footer class="modal-footer">{buttons}</footer>
				</div>
			</div>
		</div>;
	}
}
JSX.register(Modal);

Modal.STATE = {
	body: {
		value: 'Some Body'
	},
	footerButtons: {
		value: [
			{
				label: 'OK'
			}
		]
	},
	header: {
		value: 'Some Header'
	}
};

export default Modal;

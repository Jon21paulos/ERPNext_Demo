// Copyright (c) 2022, Jon and contributors
// For license information, please see license.txt

frappe.ui.form.on('Stock Out', {
	// refresh: function(frm) {

	// }
	//   validate:function(frm){
	// 	frappe.db.get_value('Stock In', {name: frm.doc.item_name}, 'qty')
	// 	.then(r => {
	// 		const qty = r.message.qty;
	// 		frappe.msgprint(__("there is no quantity that amount '{0}'",
	// 		[qty]))

	// 		if(qty<frm.doc.qty){
	// 			frappe.throw(__("there is no quantity that amount '{0}'",
	// 				[qty]
	// 			))

	// 		}else{
	// 			// frappe.msgprint(__('Document updated successfully'));

	// 			frappe.db.set_value('Stock In', frm.doc.item_name, {
	// 				'qty': qty,
	// 			})
	// 			// frappe.msgprint(__("there is no quantity that amount '{0}'",
	// 			// 	[qty]
	// 			// ))
	// 		}

	// 		// cur_frm.set_value('qty', qty)
	// 	})


	// } 
});


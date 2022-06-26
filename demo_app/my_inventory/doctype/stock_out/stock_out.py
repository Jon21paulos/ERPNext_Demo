# Copyright (c) 2022, Jon and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class StockOut(Document):
	def validate(self):
		self.get_document()
	def get_document(self):
		doc = frappe.get_doc('Stock In',self.item_code)	
		if self.qty > doc.qty:
			frappe.throw(("the remaining quantity is {0}").format(doc.qty))	
		else:
			diff = doc.qty - self.qty
			frappe.db.set_value('Stock In', self.item_code, {'qty': diff})


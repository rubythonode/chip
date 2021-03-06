export default {
	"routes": {
		"cancel_subscription": "/billing/cancel",
		"resume_subscription": "/billing/resume",
		"change_plan": "/billing/change",
		"form_post_subscribe": "/billing",
		"form_post_update": "/billing/update"
	},
	"stripe_form": {
		"stripe_key": "",
		"csrf_token": "",
		"app_name": "Example App",
		"user_email":"user@product.com"
	},
	"plans": [
		{"id": "product-9-monthly",  "name": "Freelancer", "price": 9,  "interval": "monthly", "features": ["1 user"]},
		{"id": "product-29-monthly", "name": "Small Team", "price": 29, "interval": "monthly", "features": ["5 users"]},
		{"id": "product-59-monthly", "name": "Big Team",   "price": 59, "interval": "monthly", "features": ["15 users"]}
	],
	"subscription": {},
	"payment_info": {},
	"invoices": [],
	"coupon": ""
}

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.cartItem)

    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_options: 'shr_1L3IpqHiFjzYSLk9r1RTZatx'}
        ],
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: '{{PRICE_ID}}',
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
      }


      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
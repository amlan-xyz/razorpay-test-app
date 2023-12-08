import { Box, Stack } from "@chakra-ui/react";
import axios from "axios";

import { Card } from "../../component/Card";
export const Home = () => {
  const checkoutHanlder = async (amount) => {
    const {
      data: { razorpay_key },
    } = await axios.get("http://localhost:3001/api/payments/razorpay-key");
    const {
      data: { order },
    } = await axios.post("http://localhost:3001/api/payments/checkout", {
      amount,
    });
    console.log(order);
    console.log(razorpay_key);
    const options = {
      key: razorpay_key,
      amount: order.amount,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      callback_url: "http://localhost:3001/api/payments/verify",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#89f0b1",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <Box>
      <Stack direction={["column", "row"]}>
        <Card
          amount={5000}
          img="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvfGVufDB8fDB8fHww"
          checkoutHanlder={() => checkoutHanlder(4000)}
        />
        <Card
          amount={5000}
          img="https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycGhvbmVzfGVufDB8fDB8fHww"
          checkoutHanlder={() => checkoutHanlder(4000)}
        />
      </Stack>
    </Box>
  );
};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrder");
    if (lastOrder) {
      setOrderDetails(JSON.parse(lastOrder));
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!orderDetails) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            <CardTitle className="text-3xl">Order Confirmed!</CardTitle>
            <p className="text-muted-foreground mt-2">
              Thank you for your order. Your items will be delivered soon.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-4 rounded-lg text-left">
              <h3 className="font-semibold mb-2">Delivery Address</h3>
              <p className="text-sm">{orderDetails.address.fullName}</p>
              <p className="text-sm">{orderDetails.address.phone}</p>
              <p className="text-sm">{orderDetails.address.address}</p>
              <p className="text-sm">
                {orderDetails.address.city}, {orderDetails.address.state} - {orderDetails.address.pincode}
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg text-left">
              <h3 className="font-semibold mb-2">Order Items</h3>
              <div className="space-y-2">
                {orderDetails.items.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
              <div className="border-t mt-3 pt-3 flex justify-between font-bold">
                <span>Total Amount</span>
                <span>₹{orderDetails.total.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-sm font-semibold">Payment Method: Cash on Delivery</p>
              <p className="text-sm text-muted-foreground mt-1">
                Please keep exact cash ready for payment
              </p>
            </div>

            <Button onClick={() => navigate("/")} className="w-full" size="lg">
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirmation;

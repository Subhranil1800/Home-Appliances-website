import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOrder = async () => {
      const orderId = searchParams.get("orderId");
      
      if (!orderId) {
        toast({
          title: "Order not found",
          description: "No order information available",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Please sign in",
          description: "You need to be logged in to view your order",
          variant: "destructive",
        });
        navigate("/auth");
        return;
      }

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("id", orderId)
        .single();

      if (error || !data) {
        console.error("Error fetching order:", error);
        toast({
          title: "Order not found",
          description: "Could not load your order details",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setOrderDetails(data);
      setIsLoading(false);
    };

    loadOrder();
  }, [navigate, searchParams, toast]);

  if (isLoading || !orderDetails) {
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
              <p className="text-sm">{orderDetails.full_name}</p>
              <p className="text-sm">{orderDetails.phone}</p>
              <p className="text-sm">{orderDetails.address}</p>
              <p className="text-sm">
                {orderDetails.city}, {orderDetails.state} - {orderDetails.pincode}
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
                <span>₹{orderDetails.total_price.toLocaleString("en-IN")}</span>
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


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { CircleUserRound, Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNav() {
  const { loginWithRedirect,user, isAuthenticated } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger> <Menu className="text-orange-500" /> </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center font-bold gap-2">
                <CircleUserRound className="text-orange-500" />
                {user?.email}
              </span>
            ) : (
            <span>Welcome to cheesy world!</span> 
            )}
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (
            <MobileNavLinks/>
            ):(
              <Button
              onClick={async () => await loginWithRedirect()}
              className="flex-1 font-bold bg-orange-500">
              Login
            </Button>
              
            )}

           
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}


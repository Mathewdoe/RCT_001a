import Image from "next/image";
import Link from "next/link";
import { Button, Navbar } from "@material-tailwind/react";

const NavBar = () => {
  return (
    <Navbar fullWidth={true} className="w-screen rounded-none">
      <div className="w-full flex items-center justify-between">
        <section>
          <Image alt="_logo" src="/logo.png" width={100} height={100} />
        </section>

        <section className="flex space-x-2 items-center">
          <Link href="/customers">
            <a>
              <Button className="bg-purple-600 rounded-none">
                All customers
              </Button>
            </a>
          </Link>

          <Link href="/customers/new/details">
            <a>
              <Button className="rounded-none bg-[#328fa8]">
                Add customer
              </Button>
            </a>
          </Link>
        </section>
      </div>
    </Navbar>
  );
};

export default NavBar;

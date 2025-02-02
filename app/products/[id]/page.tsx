import { Сarousel } from "@/components/shared/advertisingBanners";
import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { SortPopup } from "@/components/shared/sort-popup";
import { Menu } from "lucide-react";
import { Fotter } from "@/components/shared/footer";
import Catalog from "@/components/shared/catalog";
export default function ProductPage() {
  return (
    <Container className="w-full ">
      <Header />
      <Catalog />
      <div>
        <h1>Product Page</h1>
      </div>
      <Fotter />
    </Container>
  );
}

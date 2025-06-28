import { House, Heart, Compass, MessageCircle } from "lucide-react-native";
import React from "react";

// ✅ Déclare un type sécurisé pour les noms de route
export type TabRouteName = "dashboard" | "favorite" | "message";

// ✅ Typage explicite de l'objet `icon`
export const icon: Record<
  TabRouteName,
  (props: { color: string }) => JSX.Element
> = {
  dashboard: (props) => <House {...props} size={24} />,
  favorite: (props) => <Heart {...props} size={24} />,
  message: (props) => <MessageCircle {...props} size={24} />,
};

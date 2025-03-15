import { cn } from "@app/lib/utils";
import { ChevronRight } from "lucide-react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

interface ColoredButtonProps {
    children: string;
}

function ColoredButton({ children }: ColoredButtonProps) {
    return <div className="group cursor-pointer relative mx-auto flex items-center justify-center rounded-full px-6 py-3 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
        <span
            className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
            )}
            style={{
                WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
            }}
        />
        <AnimatedGradientText className="text-sm font-medium">
            {children}
        </AnimatedGradientText>
        <ChevronRight
            className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
        />
    </div>
}

export { ColoredButton }
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useCheckKey from "@/hooks/useCheckKey";
import { ViewProp } from "@/services/viewApi";

export default function ViewItem({ view }: { view: ViewProp }) {
  // const { openValue, checkKey } = useCheckKey();
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={view.id}>
          <AccordionTrigger className="w-full">
            View {view.identifier}
          </AccordionTrigger>
          <AccordionContent>
            {view.devices.map((device) => (
              <div key={device.id}>device {device.devName}</div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

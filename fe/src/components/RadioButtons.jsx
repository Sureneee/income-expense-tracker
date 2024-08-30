import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioButtons() {
  return (
    <RadioGroup defaultValue="all">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">All</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="income" id="r2" />
        <Label htmlFor="r2">Income</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="expense" id="r3" />
        <Label htmlFor="r3">Expense</Label>
      </div>
    </RadioGroup>
  )
}

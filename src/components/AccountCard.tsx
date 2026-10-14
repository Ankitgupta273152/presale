import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Data, Meta } from "@/hooks/usePresale";
import { fmt } from "@/lib/format";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b py-3 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="break-words text-right text-sm font-semibold">{value}</span>
    </div>
  );
}

export function AccountCard({ meta, data }: { meta: Meta; data: Data }) {
  return (
    <Card>
      <CardHeader><CardTitle>Your account</CardTitle></CardHeader>
      <CardContent>
        <Row label={`${meta.us} balance`} value={`${fmt(data.uBal, meta.ud)} ${meta.us}`} />
        <Row label={`${meta.ts} balance`} value={`${fmt(data.tBal, meta.td, 2)} ${meta.ts}`} />
        <Row label="You contributed" value={`${fmt(data.contrib, meta.ud)} ${meta.us}`} />
        <Row label={`${meta.us} approved`} value={`${fmt(data.allow, meta.ud)} ${meta.us}`} />
      </CardContent>
    </Card>
  );
}

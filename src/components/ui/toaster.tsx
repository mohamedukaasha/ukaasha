import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-toast flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto p-4 rounded-sm border shadow-lg animate-slide-up ${
            t.variant === "destructive"
              ? "bg-destructive text-destructive-foreground border-destructive"
              : "bg-card text-card-foreground border-border"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              {t.title && (
                <p className="font-display font-semibold text-sm">{t.title}</p>
              )}
              {t.description && (
                <p className="font-mono text-xs mt-1 opacity-90">{t.description}</p>
              )}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="size-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Dismiss"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

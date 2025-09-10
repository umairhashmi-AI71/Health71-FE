import { Trophy, Zap, DollarSign, Sparkles, ClipboardCheck, Users, Medal, NotebookPen, BadgeDollarSign } from 'lucide-react'

export default function DashboardMetrics() {
  const metrics = [
    {
      icon: Medal,
      value: "2/12",
      label: "Rank",
      bgColor: "bg-blue-100",
    },
    {
      icon: NotebookPen,
      value: "95%",
      label: "Clean Claims",
      bgColor: "bg-purple-100",
    },
    {
      icon: BadgeDollarSign,
      value: "$42,500",
      label: "Revenue Impact",
      bgColor: "bg-green-100",
    },
    {
      icon: Sparkles,
      value: "15 claims/hr",
      label: "Team Average",
      bgColor: "bg-pink-100",
    },
    {
      icon: ClipboardCheck,
      value: "18 tasks/hr",
      label: "Your average today",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Users,
      value: "$9,800",
      label: "Team Average",
      bgColor: "bg-orange-100",
    }
  ]

  return (
    <div className="w-full">
      <div className="bg-basecard rounded-xl shadow border border-base p-5">
        <div className="flex justify-between space-x-4 overflow-x-auto">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div
                key={index}
                className=" p-4 border-0 flex items-center space-x-3 min-w-max"
              >
                <div className={`${metric.bgColor} w-12 h-12 rounded-full flex items-center justify-center`}>
                  <IconComponent className={`w-5 h-5`} strokeWidth={1.5} />
                </div>
                <div className="flex-shrink-0">
                  <div className="text-lg font-semibold text-gray-900 leading-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {metric.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
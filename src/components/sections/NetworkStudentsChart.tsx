import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { globalCenters } from '../../data/globalNetwork';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const chartData = [...globalCenters]
  .sort((a, b) => b.students - a.students)
  .map((c) => ({ name: c.country, students: c.students }));

export function NetworkStudentsChart() {
  return (
    <section className="relative bg-ink-950 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Network at a Glance"
          title="Students by campus and global center."
          description="The Main Campus in India remains the largest single location, with Global Centers in Singapore and the UAE close behind."
        />

        <Reveal className="glass-panel mt-10 h-[380px] p-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis
                dataKey="name"
                angle={-35}
                textAnchor="end"
                interval={0}
                height={70}
                tick={{ fill: 'rgba(246,243,236,0.6)', fontSize: 11 }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: 'rgba(246,243,236,0.6)', fontSize: 11 }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: 'rgba(79,214,234,0.06)' }}
                contentStyle={{
                  background: '#0b1123',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  color: '#f6f3ec',
                  fontSize: 12,
                }}
              />
              <Bar dataKey="students" fill="#4fd6ea" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Reveal>
      </div>
    </section>
  );
}

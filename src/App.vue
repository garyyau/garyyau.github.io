<template>
	<div
		class="relative m-0 flex w-full ph-max-w-[880px] flex-col ph-gap-y-[15px] border-primary ph-py-[25px] ph-px-[40px] [--left-col-width:20%] ph-border-l-[18px] lg:mx-auto lg:ph-my-[20px] lg:w-[90lvw] lg:ph-py-[50px] lg:ph-px-[80px] lg:shadow-glow print:m-0 print:w-full print:max-w-none print:ph-py-[10px] print:ph-px-[20px] print:shadow-none"
	>
		<div>
			<h1 class="ph-mb-[10px] text-primary">
				{{ data.personalInfo.name }}
			</h1>

			<h2 class="ph-mb-[10px] text-primary lg-print:ph-mb-[5px]">
				{{ data.personalInfo.title }}
			</h2>

			<div
				class="flex flex-col items-start justify-center ph-gap-x-[6px] ph-gap-y-[2px] ph-text-[12px] lg-print:flex-row lg-print:items-center lg-print:justify-start lg-print:ph-gap-y-[0px]"
			>
				<div>{{ data.personalInfo.location }}</div>

				<span class="hidden lg-print:inline">&bull;</span>

				<div>{{ data.personalInfo.email }}</div>

				<span class="hidden lg-print:inline">&bull;</span>

				<a
					:href="toValidUrl(data.personalInfo.linkedin)"
					target="_blank"
					class="underline transition-colors hover:text-primary print:no-underline"
				>
					{{ data.personalInfo.linkedin }}
				</a>
			</div>
		</div>

		<div>
			{{ data.summary }}
		</div>

		<div>
			<h3 class="border-b-section border-primary text-primary">
				Work Experience
			</h3>

			<div class="grid-content">
				<template v-for="(exp, index) in data.experience" :key="index">
					<div
						class="flex flex-row ph-gap-x-[10px] lg-print:flex-col"
					>
						<div class="font-semibold">
							{{ exp.startDate }} - {{ exp.endDate ?? 'Present' }}
						</div>

						<div>{{ exp.location }}</div>
					</div>

					<div>
						<div class="font-semibold">{{ exp.company }}</div>

						<div class="flex flex-col ph-gap-y-[10px]">
							<div
								v-for="position in exp.positions"
								:key="position.title"
							>
								<div
									class="ph-mb-[4px] flex items-center ph-gap-x-[5px]"
								>
									<h4 class="text-primary">
										{{ position.title }}
									</h4>

									<div
										v-if="position.startDate"
										class="text-gray-600 italic"
									>
										({{ position.startDate }} -
										{{ position.endDate ?? 'Present' }})
									</div>
								</div>

								<ul class="list-disc ph-ps-[20px]">
									<li
										v-for="description in position.descriptions"
										:key="description"
									>
										{{ description }}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>

		<div>
			<h3 class="border-b-section border-primary text-primary">
				Projects
			</h3>

			<div class="grid-content">
				<template v-for="(proj, index) in data.projects" :key="index">
					<div class="font-semibold">
						{{ proj.date }}
					</div>

					<div>
						<div class="font-semibold">
							{{ proj.company }}
						</div>

						<div class="flex flex-col">
							<div
								class="ph-mb-[4px] flex items-center ph-gap-x-[5px]"
							>
								<h4 class="text-primary">
									{{ proj.name }}
								</h4>
							</div>

							<div class="ph-mb-[8px]">
								<ul class="list-disc ph-ps-[20px]">
									<li
										v-for="(
											description, descriptionIndex
										) in proj.descriptions"
										:key="descriptionIndex"
									>
										{{ description }}
									</li>
								</ul>
							</div>

							<div
								v-if="proj.technologies"
								class="text-gray-600 italic"
							>
								Technologies: {{ proj.technologies.join(', ') }}
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>

		<div>
			<h3 class="border-b-section border-primary text-primary">
				Capabilities
			</h3>

			<div class="grid-content ph-gap-y-[5px]">
				<template
					v-for="(capability, capabilityIndex) in data.capabilities"
					:key="capabilityIndex"
				>
					<div class="font-semibold">{{ capability.name }}</div>
					<div>{{ capability.list.join(', ') }}</div>
				</template>
			</div>
		</div>

		<div>
			<h3 class="border-b-section border-primary text-primary">
				Education
			</h3>

			<div class="grid-content">
				<div class="flex flex-row ph-gap-x-[10px] lg-print:flex-col">
					<div class="font-semibold">
						{{ data.education.date }}
					</div>

					<div>{{ data.education.location }}</div>
				</div>

				<div>
					<div class="font-semibold">
						{{ data.education.school }}
					</div>

					<h4 class="text-primary">
						{{ data.education.degree }}
					</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { data } from '@/content/data';

function toValidUrl(str: string): string {
	try {
		new URL(str);
		return str;
	} catch {
		try {
			const url = new URL(`https://${str}`);
			return url.href;
		} catch {
			return `https://${encodeURIComponent(str)}`;
		}
	}
}
</script>

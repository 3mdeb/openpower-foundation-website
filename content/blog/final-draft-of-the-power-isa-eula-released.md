---
title: "Final Draft of the Power ISA EULA Released"
date: "2020-02-13"
categories: 
  - "blogs"
tags: 
  - "ibm"
  - "power-isa"
  - "microwatt"
  - "eula"
  - "chiselwatt"
  - "end-user-license-agreement"
---

**By: Hugh Blemings**

On August 20, 2019 the OpenPOWER Foundation, along with IBM, announced that the POWER ISA was to be released under an open license. You can read more about it in [previous posts](https://openpowerfoundation.org/the-next-step-in-the-openpower-foundation-journey/) but the short story is that anyone is now free to build their own POWER ISA compliant chips, ASICs, FPGAs etc. without paying a royalty and with a “pass through” patent license from IBM for anything that pertains to the ISA itself.  On top of this of course an ability to contribute to the ISA as well through a Workgroup we’re standing up within the OpenPOWER Foundation.

Microwatt and Chiselwatt are just two examples of implementations that come under this license and there are rumblings about some others, including credible discussions around SoCs based on the ISA. Exciting times ahead!

We’ve had some questions about what the actual End User License Agreement (EULA) will look like and we’re pleased to present a final draft of it below.  If you’ve questions or feedback please do get in touch. The details of the associated Workgroup is being finalised by the board, more to follow on that too. :)

## **FINAL DRAFT - Power ISA End User License Agreement - FINAL DRAFT**

“Power ISA” means the microprocessor instruction set architecture specification version provided to you with this document. By exercising any right under this End User License Agreement, you (“Recipient”) agree to be bound by the terms and conditions of this Power ISA End User License (“Agreement”).

All information contained in the Power ISA is subject to change without notice. The products described in the Power ISA are NOT intended for use in applications such as implantation, life support, or other hazardous uses where malfunction could result in death, bodily injury, or catastrophic property damage.

**Definitions**

“Architectural Resources” means assignable resources necessary for elements of the Power ISA to interoperate, including, but not limited to: opcodes, special purpose registers, defined registers, reserved bits in existing defined registers, control table fields and bits, and interrupt vectors.

“Compliancy Subset” means a portion of the Power ISA, defined within the Power ISA, which must be implemented to ensure software compatibility across Power ISA compliant devices.

“Contribution” means any work of authorship that is intentionally submitted to OPF for inclusion in the Power ISA by the copyright owner or by an individual or entity authorized to submit on behalf of the copyright owner. Without limiting the generality of the preceding sentence, RFCs will be considered Contributions.

“Custom Extensions” means additions to the Power ISA in a designated subset of Architectural Resources defined by the Power ISA. For clarity, Custom Extensions are not Contributions.

"Integrated Circuit" shall mean an integral unit including a plurality of active and passive circuit elements formed at least in part of semiconductor material arranged on or in a chip(s) or substrate.

“OPF” means The OpenPOWER Foundation.

“Licensed Patent Claims” means patent claims:

(a) licensable by or through OPF; and

(b) which, but for this Agreement, would be necessarily infringed by the use of the Power ISA in making, using, or otherwise implementing a Power Compliant Chip.

“Party(ies)” means Recipient or OPF or both.

“OpenPOWER ISA Compliance Definition” means the validation procedures associated with architectural compliance developed, delivered, and maintained by OPF as specified in the following link: [https://openpowerfoundation.org/?resource\_lib=openpower-isa-compliance-definition](https://openpowerfoundation.org/?resource_lib=openpower-isa-compliance-definition).

“Power Compliant” means an implementation of (i) one of the Compliancy Subsets alone or (ii) one of the Compliancy Subsets together with selected permitted combinations of additional instructions and/or facilities within the Power ISA, in the case of clauses (i) and (ii), provided that such implementation meets the corresponding portions of the OpenPOWER ISA Compliance Definition.

“Power ISA Core” means an implementation of the Power ISA that is represented by software, a hardware description language (HDL), or an Integrated Circuit design, but excluding physically implemented chips  (such as microprocessors, system on a chips, or field-programmable gate arrays FPGAs)); provided that such implementation is primarily designed to be included as part of software, a hardware description language (HDL), or an Integrated Circuit design that are in each case Power Compliant, regardless of whether such implementation, independently, is Power Compliant.

“Power Compliant Chip” means a Power Compliant physical implementation of one or more Power ISA Cores into one or more Integrated Circuits, including, for example, in a microprocessor, system on a chip, or a field-programmable gate array (FPGA), provided that all portions of such physical implementation are Power Compliant.

“Request for Change (RFC)” means any request for change in the Power ISA as a whole, or a change in the definition of a Compliancy Subset provided in the Power ISA.

1. **Grant of Rights**

Solely for the purposes of developing and expanding the Power ISA and the POWER ecosystem, and subject to the terms of this Agreement:

1.1 OPF grants to Recipient a nonexclusive, worldwide, perpetual, royalty-free, non-transferable license under all copyrights licensable by OPF and contained in the Power ISA to a) develop technology products compatible with the Power ISA, and b) create, use, reproduce, perform, display, and distribute Power ISA Cores.

1.2 OPF grants to Recipient the right to license Recipient Power ISA Cores under the Creative Commons Attribution 4.0 license.

1.3 OPF grants to Recipient the right to sell or license Recipient Power ISA Cores under independent terms that are consistent with the rights and licenses granted under this Agreement. As a condition of the license grant under this section 1.3, the Recipient must either provide the Power ISA with this Agreement to the downstream recipient, or provide notification for the downstream recipient to obtain the Power ISA and this Agreement to have appropriate patent licenses to implement the Power ISA Core as a Power Compliant Chip. It is clarified that no rights are to be granted under this Section 1.3 beyond what is expressly permitted by this Agreement.

1.4 Notwithstanding Sections 1.1 through 1.3 above, Recipient shall not have the right or license to create, use, reproduce, perform, display, distribute, sell, or license the Power ISA Core in a physically implemented chip (including a microprocessor, system on a chip, or a field-programmable gate array (FPGA)) that is not Power Compliant, nor to license others to do so.

1.5 OPF grants to Recipient a nonexclusive, worldwide, perpetual, royalty-free, non-transferable license under Licensed Patent Claims to make, use, import, export, sell, offer for sale, and distribute Power Compliant Chips.

1.6 If Recipient institutes patent litigation or an administrative proceeding (including a cross-claim or counterclaim in a lawsuit, or a United States International Trade Commission proceeding) against OPF, OPF members, or any third party entity (including but not limited to any third party that made a Contribution) alleging infringement of any Recipient patent by any version of the Power ISA, or the implementation thereof in a CPU design, IP core, or chip, then all rights, covenants, and licenses granted by OPF to Recipient under this Agreement shall terminate as of the date such litigation or proceeding is initiated.

1.7 Without limiting any other rights or remedies of OPF, if Recipient materially breaches the terms of this Agreement, OPF may terminate this Agreement at its discretion.

2. **Modifications to the Power ISA**

2.1 Recipient shall have the right to submit Contributions to the Power ISA through a prospectively authorized process by OPF, but shall not implement such Contributions until fully approved through the prospectively authorized OPF process.

2.2 Recipient may create Custom Extensions as described and permitted in the Power ISA. Recipient is encouraged, but not required, to bring their Custom Extensions through the authorized OPF process for contributions. For clarity, Custom Extensions cannot be guaranteed to be compatible with another third party’s Custom Extensions.

3. **Ownership**

3.1 Nothing in this Agreement shall be deemed to transfer to Recipient any ownership interest in any intellectual property of OPF or of any contributor to the Power ISA, including but not limited to any copyrights, trade secrets, know-how, trademarks associated with the Power ISA or any patents, registrations or applications for protection of such intellectual property.

3.2 Recipient retains ownership of all incremental work done by Recipient to create Power ISA Cores and Power Compliant Chips, subject to the ownership rights of OPF and any contributors to the Power ISA. Nothing in this Agreement shall be deemed to transfer to OPF any ownership interest in any intellectual property of Recipient, including but not limited to any copyrights, trade secrets, know-how, trademarks, patents, registrations or applications for protection of such intellectual property.

4. **Limitation of Liability**

4.1 THE POWER ISA AND ANY OTHER INFORMATION CONTAINED IN OR PROVIDED UNDER THIS DOCUMENT ARE PROVIDED ON AN “AS IS” BASIS. OPF makes no representations or warranties, either express or implied, including but not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement, or that any practice or implementation of the Power ISA or other OPF documentation will not infringe any third party patents, copyrights, trade secrets, or other rights. In no event will OPF or any other person or entity submitting any Contribution to OPF be liable for damages arising directly or indirectly from any use of the Power ISA or any other information contained in or provided under this document.

5. **Compliance with Law**

5.1 Recipient shall be responsible for compliance with all applicable laws, regulations and ordinances, and will obtain all necessary permits and authorizations applicable to the future conduct of its business involving the Power ISA. Recipient agrees to comply with all applicable international trade laws and regulations such as export controls, embargo/sanctions, antiboycott, and customs laws related to the future conduct of the business involving the Power ISA to be transferred under this Agreement. Recipient warrants that it is knowledgeable with, and will remain in full compliance with, all applicable export controls and embargo/sanctions laws, regulations or rules, orders, and policies, including but not limited to, the U.S. International Traffic in Arms Regulations (“ITAR”), the U.S. Export Administration Regulations (“EAR”), and the regulations of the Office of Foreign Assets Control (“OFAC”), U.S. Department of Treasury.

6. **Choice of Law**

6.1 This Agreement is governed by the laws of the State of New York, without regard to the conflict of law provisions thereof.

7. **Publicity**

7.1 Nothing contained in these terms shall be construed as conferring any right to use in advertising, publicity or other promotional activities any name, trade name, trademark or other designation of any Party hereto (including any contraction, abbreviation or simulation of any of the foregoing).
